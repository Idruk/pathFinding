import React, {useState} from 'react';
import breathFrist from './breathFirst'

function Table() {

    const [tab, setTab] = useState([])

    function addEventOnTd () {
        const d = document.querySelectorAll('#table td')
        d.forEach(e => e.addEventListener("mouseenter", function(e) {
            
            // console.log(this)
            if (this.className === "blanc" && this.className !== "start" && this.className !== "end") {
                this.className = "wall"
                // this.style.transition = "1s"
                this.style.background="#000";
                
                // this.style = wall
            }
            else if (this.className === "wall" && this.className !== "start" && this.className !== "end") {
                this.className = "blanc"
                this.style.background="#fff";
            }
        }));
    }

    function getTab() {
        let res = []
        
        const d = document.querySelectorAll('#table tr')
        d.forEach(e => {
            let row = []
            e.querySelectorAll('td').forEach(i => {
                row.push(i.className)
            })
            res.push(row)
        })
        setTab(res)
    }


    function formatPath(path) {
        let res = []
        path.shift()
        for (let i = 0; path[i]; i++) {
            let splited = path[i].split('x')
            let tmp = [parseInt(splited[1]), parseInt(splited[0])]
            res.push(tmp)
        }

        return (res)
    }

    async function drawLineTest() {
        getTab()

        var domTab = []
        const d = document.querySelectorAll('#table tr')
        d.forEach(e => {

            let tmp = []
            e.querySelectorAll('td').forEach(i => {
                tmp.push(i)
            })
            domTab.push(tmp)
        })

        const res = await breathFrist(tab, domTab)
        let path = formatPath(res).reverse()
     
        

        let toColor = path.shift()
        console.log(toColor)

        // let domTab = []
        // d.forEach(e => {

        //     let tmp = []
        //     e.querySelectorAll('td').forEach(i => {
        //         tmp.push(i)
        //     })
        //     domTab.push(tmp)
        // })

        for (let i = 0; path[i]; ++i) {
            domTab[path[i][1]][path[i][0]].className = 'blanc'
            domTab[path[i][1]][path[i][0]].style.background="#f0f";
        }
    }

    const coll = new Array(20)
    const row = new Array(70)
    coll.fill(0)
    row.fill(0)

    return (
        <div>
             <button type="button" onClick={addEventOnTd}>Add Walls</button>
             <button type="button" onClick={drawLineTest} >Test Line</button>
             <button type="button" onClick={getTab} >Get Map</button>
             <table style={tableStyle} id="table">
            <tbody>
                {coll.map(function(item, indexcoll) {
                    const t = indexcoll
                    return ( <tr key={t}>
                        {
                            row.map(function (item, indexRow) {
                                if (t === 10 && indexRow === 15)
                                    return (<td style={tdStartStyle} className="start" key={t + " " + indexRow} id={t + " " + indexRow} ></td>)
                                if (t === 10 && indexRow === 50)
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
        {/* <BreathFrist/> */}
        </div>
       
    )
}


const tdStyle = {
    border:"1px solid rgb(0, 0, 0)",
    width: "25px",
    height: "25px",
    transition: "1s"
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

export default Table;