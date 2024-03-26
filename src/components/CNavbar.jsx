import React from "react";
function CNavbar({filterItem, diversityList}){
    return (
        <nav className="navbar">
                    <div className="btn-group">
                    {
                        diversityList.map((curElem) => {
                            return (
                                <button className="btn-group__item" 
                        onClick={() => filterItem(curElem)}>
                        {curElem}
                        </button>
                            )
                        })
                    }
                        
                        
                    </div>
                </nav>
    )
}
export default CNavbar;