function breathFrist(tab) {

    return new Promise ((resolve, reject) => { 
        let queue = []
        let visited = []
        let visitedPrev= {}

        queue.push({row:10, col: 15})
        visited.push("10x15")
        let sec = 0

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
                if (!(visited.includes(key)) && tab[70 * nRow + nCol].state !== 'wall') {
                    queue.push({row: nRow, col: nCol})
                    visited.push(key)
                    visitedPrev[key] = `${row}x${col}`
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
            j++
            if (j > 1500) {
                console.log("no path")
                resolve(null)
                return
            }
        } while (tofind != current)
        path.push(current)
        console.log("resolving")
        resolve([path, visited])
    })
}

export default breathFrist;