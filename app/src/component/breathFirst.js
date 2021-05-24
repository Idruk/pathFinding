function breathFrist(tab, domTab) {

    return new Promise(resolve => {
        let queue = []
        let visited = []
        let visitedPrev= {}

        queue.push({row:10, col: 15})
        visited.push("10x15")

        while(queue.length > 0) {

            const {row, col} = queue.shift()        

            if (row == 10 && col == 50)
                break

            const neighbors = [
                { row: row - 1, col},
                { row, col: col + 1},
                { row: row + 1, col},
                { row, col: col - 1}
            ]
        
            for (let i = 0; i < 4; i++) {
                const nRow = neighbors[i].row
                const nCol = neighbors[i].col

                const key = `${nRow}x${nCol}`

                if (nRow >= 20 || nRow < 0 || nCol >= 70 || nCol < 0)
                    continue
                if (!(visited.includes(key)) && tab[nRow][nCol] !== 'wall') {
                    queue.push({row: nRow, col: nCol})
                    visited.push(key)
                    visitedPrev[key] = `${row}x${col}`
                    if (!(nRow == 10 && nCol == 50)) {
                        // setInterval(function () {domTab[nRow][nCol].style.background="#f00"; domTab[nRow][nCol].style.transition = "2s";}, 2000)
                        domTab[nRow][nCol].style.background="#f00";
                         domTab[nRow][nCol].style.transition = "3s";
                        
                    }
                    
                }            
                
            }
            if (queue.length > 2000)
                break
        }
        
        const path = []
        let tofind = "10x15"
        let current = "10x50"
        let j = 0

        do {
            path.push(current)
            current = visitedPrev[current]
        } while (tofind != current)
        path.push(current)
        resolve(path)
    })
    
}

export default breathFrist;