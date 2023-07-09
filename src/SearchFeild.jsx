import React from "react";

const SearchFeild = ({searchFeilds, SearchChanges}) => {
   return(
    <div className=" flex items-center justify-center">
        <input type="search" 
        id="searchFeilds" 
        placeholder="Search YourSelf"
        className="bg-lighest-blue pl3 pt2 .f2  pb2 tc black-90 outline-0 fw5 w5 h2 br3 .outline-0 bn"
        onChange={SearchChanges}
        />
    </div>
   )
}

export default SearchFeild;