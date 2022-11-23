import React from "react";
import '../styles/pages.scss'
interface Props{
    setPageNum:React.Dispatch<React.SetStateAction<number>>,
    pageNum:number
}
const PageSelector=(props:Props)=>{
    const {setPageNum,pageNum}=props;
    const prevString="<";
    const nextString=">";
    const pageList=[];
    let x=pageNum;
    if(pageNum>=3)
    {
        pageList.push(pageNum-2);
        pageList.push(pageNum-1);
        pageList.push(pageNum);
        pageList.push(pageNum+1);
        pageList.push(pageNum+2);
       
    }
    if(pageNum==2)
    {
        pageList.push(pageNum-1);
        pageList.push(pageNum);
        pageList.push(pageNum+1);
        pageList.push(pageNum+2);
        pageList.push(pageNum+3);
    }
    if(pageNum==1)
    {
        pageList.push(pageNum);
        pageList.push(pageNum+1);
        pageList.push(pageNum+2);
        pageList.push(pageNum+3);
        pageList.push(pageNum+4);
        
    }
    const onClickCallback=(increase:boolean)=>{
        console.log(increase);
        
        if(!increase)
        {
            if(pageNum!=1)
            {
                setPageNum((prev)=>prev-=1)
            }
        }
        else
        {
            setPageNum((prev)=>prev+=1);
        }
        console.log(pageNum);
        
    }
    const selectedPage=(page:number)=>{
        setPageNum(page)
    }
    return (
        <div className="anime_name_pagination intro">
      <div className="pagination recent">
        <ul className="pagination-list">
            <li className="arrow" onClick={()=>onClickCallback(false)} >
                {prevString}
            </li>
            {
                pageList&&pageList.map((page)=>{
                    if(pageNum==page) return <li onClick={()=>selectedPage(page)} className="pageNo selected">{page}</li>
                    return <li onClick={()=>selectedPage(page)} className="pageNo">{page}</li>
                })
            }
            <li className="arrow" onClick={()=>onClickCallback(true)} >
                {nextString}
            </li>
        </ul>                 
    </div>
  </div>
    )
}
export default PageSelector;