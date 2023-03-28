import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Pagination (props) {
  const router = useRouter();
  const [firstPage, setFirstPage] = useState(1);
  const [pages, setPages] = useState([]);
  const totalPage = props.totalPage;
  const currentPage = props.page;

  const onPageClick = (page) => {
    router.push(`/${props.sort}/${page}`);
  }

  const getPagesArray = () => {
    const firstPage = parseInt((currentPage-1)/5)*5 + 1;
    let pagesArr = [];
    for (let i=0; i<5; i++) {
      if (firstPage + i <= totalPage) {
        pagesArr.push(firstPage + i);
      }
    }
    setFirstPage(firstPage);
    setPages(pagesArr);
  }

  useEffect(()=>{
    const firstPage = parseInt((currentPage-1)/5)*5 + 1;
    let pagesArr = [];
    for (let i=0; i<5; i++) {

      if (firstPage + i <= totalPage) {
        pagesArr.push(firstPage + i);
      }
    }
    setFirstPage(firstPage);
    setPages(pagesArr);
  }, [currentPage, totalPage])

  return <div className="pagination">
  <ul className="montserrat">
    {firstPage === 1 ? 
      <li className="pg-disabled">prev</li> :
      <li onClick={()=>{onPageClick(firstPage-5)}} className="pg-btn">prev</li>
    }
    {pages.map((page)=>{
      return <li key={page} onClick={()=>{onPageClick(page)}}>
        <div className={currentPage == page ? "fl-center active" : "fl-center"}>
          {page}
        </div>
      </li>
    })}
    {pages.length === 5 ? <li onClick={()=>{onPageClick(firstPage+5)}} className="pg-btn">next</li> : null}
  </ul>
</div>
}