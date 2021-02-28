const tdStyle = {
    border:"1px solid rgb(0, 0, 0)",
    width: "25px",
    height: "25px"
}

const tableStyle = {
    borderSpacing: "0",
    margingLeft: "10px",
    margingRight: "10px"
}

function Table() {

    function addEventOnTd () {
        const d = document.querySelectorAll('#table td')
        d.forEach(e => e.addEventListener("click", function() {
            this.style.background="#000";
            console.log(this)
            if (this.className == "blanc") {
                this.className = "wall"
            }
        }));
    }

    const coll = new Array(20)
    const row = new Array(70)
    coll.fill(0)
    row.fill(0)

    return (
        <div>
             <button type="button" onClick={addEventOnTd}>Add Walls</button> 
             <table style={tableStyle} id="table">
            <tbody>
                {coll.map(function(item, indexcoll) {
                    const t = indexcoll
                    return ( <tr key={t}>
                        {
                            row.map(function (item, indexRow) {
                                return (
                                    <td style={tdStyle} className="blanc" key={t + " " + indexRow} id={t + " " + indexRow} ></td>
                                )
                            })
                        }
                    </tr>
                    )
                })}
            </tbody>
            
        </table>
        </div>
       
    )
}

export default Table;