const tdStyle = {
    border:"1px solid rgb(0, 0, 0)",
    width: "25px",
    height: "25px"
}

const tdStartStyle = {
    border:"1px solid rgb(100, 100, 100)",
    backgroundColor:"#0f0",
    width: "25px",
    height: "25px"
}

const tdEndStyle = {
    border:"1px solid rgb(100, 100, 100)",
    backgroundColor:"#00f",
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
        d.forEach(e => e.addEventListener("mouseenter", function(e) {
            
            console.log(this)
            if (this.className == "blanc" && this.className != "start" && this.className != "end") {
                this.className = "wall"
                this.style.background="#000";
            }
            else if (this.className == "wall" && this.className != "start" && this.className != "end") {
                this.className = "blanc"
                this.style.background="#fff";
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
                                if (t == 10 && indexRow == 15)
                                    return (<td style={tdStartStyle} className="start" key={t + " " + indexRow} id={t + " " + indexRow} ></td>)
                                if (t == 10 && indexRow == 50)
                                    return (<td style={tdEndStyle} className="end" key={t + " " + indexRow} id={t + " " + indexRow} ></td>)
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