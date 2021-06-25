import React, {useEffect, useState, useImperativeHandle} from 'react';
import breathFrist from './breathFirst'
import styles from "./tablecss.module.css"

function Table() {

    const [tab, setTab] = useState([])
    const [refs, setRefs] = useState([])
    const [wallPut, setWallPut] = useState(false)
    const [down, setDown] = useState(false)

    // const [, updateState] = React.useState();
    // const forceUpdate = React.useCallback(() => updateState({}), []);

    //////////////////
    // Create CELL //
    ////////////////
    function Cell(props) {

        const [color, setColor] = useState(props.color)

        function changeState() {
            if (down && wallPut && props.index !== 715 && props.index !== 750) {
                tab[props.index].color = "#000000ff"
                tab[props.index].state = "wall"
                setColor("#000000ff")
            }
        }

        useImperativeHandle(props.reff, () => ({

            changeColor(color) {
                let timer = setInterval(() => {
                    setColor(color)
                    clearTimeout(timer)
                }, props.animationDelay)
                
                
            }        
        }));

        return <div ref={props.reff} onMouseEnter={changeState} className={styles.divstyle} style={{...props.style, ...{backgroundColor: color}}} key={props.keyit} ></div>
    }


    useEffect(() => {
        createCellTab()
    } , [])

    function pulWalls() {
        if (wallPut === false) {
            setWallPut(true)
        } else {
            setWallPut(false)
        }
    }

    function createCellTab() {
        let tmp = []
        let top = 0
        let left = 0

        let cellColor = "#ffffffff"
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 70; j++) {

                if (i === 10 && j === 15) {
                    cellColor = "#cc1616ff"
                }
                else if (i === 10 && j === 50) {
                    cellColor = "#cc8f16ff"
                }
                else {
                    cellColor = "#ffffffff"
                }
                tmp.push({
                    style:{ top: top,left: left, zindex: 1},
                    keyit:`t-${i}-${j}`,
                    animationDelay : 0,
                    pos: {x: i, y: j},
                    color: cellColor,
                    state: "blanc",
                }
                )
                left += 25
            }
            left = 0
            top += 25
        }
        setRefs(elRefs => (Array(20*70).fill().map((_, i) => elRefs[i] || React.createRef())));
        setTab(tmp)
    }

    async function findPath() {
        let bfs = await breathFrist(tab)
        let path = bfs[0]
        let visited = bfs[1]
        let delay = 2000

        for (let i = 0; visited[i]; i++) {
            if (visited[i] !== "10x15" && visited[i] !== "10x50") {
                let current = visited[i].split('x')
                let nRow = parseInt(current[0])
                let nCol = parseInt(current[1])
                delay += 2000
                tab[70 * nRow + nCol].animationDelay = delay
                refs[70 * nRow + nCol].current.changeColor("#345ad9ff")
            }
            
        }

        delay += 20000
        path = path.reverse()
        for(let i = 0; path[i]; i++) {
            if (path[i] !== "10x15" && path[i] !== "10x50") {
                let current = path[i].split('x')
                let nRow = parseInt(current[0])
                let nCol = parseInt(current[1])
                delay += 2000
                tab[70 * nRow + nCol].animationDelay = delay
                refs[70 * nRow + nCol].current.changeColor("#39bd2dff")
            }
        }
    }

    return (
        <div>
            <button type="button" onClick={pulWalls}>Add Walls</button>
            <button type="button" onClick={findPath} >Find path</button>
            <button type="button" onClick={createCellTab} >reset</button>
            <div onMouseDown={()=> setDown(true)} onMouseUp={()=> setDown(false)} style={{position: "absolute"}}>
                {
                    tab.map((item, index) => {
                        return (
                            <Cell reff={refs[index]} key={item.keyit} style={item.style} pos={item.pos} state={item.state} index={index} color={item.color}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Table;