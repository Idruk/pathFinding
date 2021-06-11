import React, {useEffect, useState} from 'react';
import breathFrist from './breathFirst'
import styles from "./tablecss.module.css"

function Table() {

    const COLL = 20
    const ROW = 70

    const [tab, setTab] = useState([])

    function createTab() {

        let tab = []
        let top = 0
        let left = 0

        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 70; j++) {

                tab.push({
                    key:`t-${i}-${j}`,
                    style: {
                        top: top,
                        left: left,
                        zindex: 1,
                    }
                })
                left += 25
            }
            left = 0
            top += 25
        }

        setTab(tab)
        console.log("test")
    }

    useEffect(() => {
        createTab()
    } , [])

    return (
        <div>
            <button type="button" onClick={() => console.log("add walls")}>Add Walls</button>
            <button type="button" onClick={() => console.log("find path")} >Find path</button>
            <div style={{position: "absolute"}}>
                {
                    tab.map(item => {
                        return (
                            <div className={styles.divstyle} style={item.style} key={item.key}></div>
                        )
                    })
                }
            </div>
        </div>
    )
}



// const tdStyle = {
//     border:"1px solid rgb(0, 0, 0)",
//     width: "25px",
//     height: "25px",
//     transition: "1s"
// }

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