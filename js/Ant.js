var offsets = [
    [-1, -1],[-1, 0],[-1, 1],
    [ 0, -1],        [ 0, 1],
    [ 1, -1],[ 1, 0],[ 1, 1]]

function Position(x, y){
    this.x = x
    this.y = y

    /*
    this.neighbours = function () {
        return _.map(offsets, function (offset) {
            return new Position(x + offset[0], y + offset[1])
        })
    }
    this.randomNeighbour = function(){
        var neighbours = this.neighbours();
        var randomIndex = Math.floor(Math.random() * (neighbours.length)) - 1;
        return neighbours[randomIndex];
    }

    this.toString = function(){
        return "[" + x + "," + y + "]"
    }
*/

}


function Ant(home){
    this.position = home
    this.move = function(){
        this.position = this.position.randomNeighbour()
    }

}