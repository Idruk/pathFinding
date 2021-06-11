import React, {useEffect, useState} from 'react';
import breathFrist from './breathFirst'
import styles from "./tablecss.module.css"

function Table() {

    const COLL = 20
    const ROW = 70

    const [tab, setTab] = useState([])
    const [grid, setGrid] = useState([])

    const [wallPut, setWallPut] = useState(false)


    //////////////////
    // Create CELL //
    ////////////////
    function Cell(props) {

        const [x, setX] = useState(props.pos.x)
        const [y, setY] = useState(props.pos.y)
        const [state, setState] = useState(props.state)

        const [color, setColor] = useState("#ffffffff")

        // function defineColor() {
        //     if (state == 0) {
        //         setColor("#ffffffff")
        //     }
        // }

        function changeState() {
            if (wallPut) {
                setColor('#000000ff')
            }
            console.log(color)
        }

        return(
            <div onMouseEnter={changeState} className={styles.divstyle} style={{...props.style, ...{backgroundColor: color}}} key={props.key}></div>
        )
    }

    function createTab() {

        let tab = []
        let top = 0
        let left = 0

        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 70; j++) {

                tab.push({
                    style:{ top: top,left: left, zindex: 1},
                    key:`t-${i}-${j}`,
                    pos: {x: i, y: j},
                    state: 0
                }
                )
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

    function pulWalls() {
        if (wallPut === false) {
            setWallPut(true)
        } else {
            setWallPut(false)
        }
    }

    function findPath() {
        console.log(tab)
    }

    return (
        <div>
            <button type="button" onClick={pulWalls}>Add Walls</button>
            <button type="button" onClick={() => console.log("find path")} >Find path</button>
            <div style={{position: "absolute"}}>
                {
                    tab.map((item, index) => {
                        return (
                            <Cell  key={item.key} style={item.style} pos={item.pos} state={item.state} index={index}/>
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