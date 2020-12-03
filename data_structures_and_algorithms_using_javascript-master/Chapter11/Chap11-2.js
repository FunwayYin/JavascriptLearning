/**
 * 创建字典类
 * @constructor
 */
function Dictionary(){
    var items = {};

    //set(key,value)向字典里添加新元素，这里主要用来添加边
    this.set = function(key,value){
        items[key] = value;
    }

    //has(key)如果存在就返回true，否则false
    this.has = function(key){
        return key in items;
    }

    //get(key)通过key查找特定的数值并返回，这里主要用来查找顶点对应的边数组
    this.get = function(key){
        return this.has(key) ? items[key] : undefined;
    }
}

/**
 * 创建图类Graph
 * @constructor
 */
function Graph(){
    var vertices = [];	//用来储存顶点
    var adjList = new Dictionary();	//用来储存边

    //创建initializeColor用来初始化各个顶点的颜色，为遍历过程中的标记做准备
    var initializeColor = function(){
        var color = [];
        for (var i=0; i<vertices.length; i++){
            color[vertices[i]] = 'white';
        }
        return color;
    }

    //addVertex(key)用来添加顶点
    this.addVertex = function(v){
        vertices.push(v);
        adjList.set(v, []);
    }

    //addEdge(key,value)用来添加边v-w
    this.addEdge = function(v,w){
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    }

    //toString()把邻接表转化成字符串的形式，便于输出显示
    this.dfs = function(){
        console.log('dfs:')
        var s = '';
        for(var i=0; i<vertices.length; i++){
            s += 'Visited vertex  '+vertices[i] + '->';
            var neighbors = adjList.get(vertices[i]);
            for(var j=0; j<neighbors.length; j++){
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        console.log(s)
    }

    //广度优先遍历，在Graph()类中添加以下方法
    this.bfs = function(v){
        var color = initializeColor();	//初始化节点，都标记为白色
        var queue = [];	//创建队列用来顶点的入队；
        queue.push(v);	//访问的节点入队列
        console.log('bfs:')
        while(!(queue.length===0)){	//如果队列非空就执行以下
            var u = queue.shift();	//节点出队列
            var neighbors = adjList.get(u);  //探索节点对应的边
            color[u] = 'grey';	//把搜索过的节点变成灰色
            for (var i=0; i<neighbors.length; i++){
                var w = neighbors[i];
                if(color[w] === 'white'){	//如果探索到的子节点是白色就逐一变灰并入队列
                    color[w] = 'grey';
                    queue.push(w);
                }
            }
            color[u] = 'black';		//节点完成搜索和探索的过程，直接变黑
            console.log('Visited vertex:'+u)
        }
    }
}

//创建实例
var graph = new Graph();
var myVertices = ['A','B','C','D','E','F','G','H','I'];
//添加顶点
for(var i=0; i<myVertices.length; i++){
    graph.addVertex(myVertices[i]);
}

//逐一加入边
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('A','D');
graph.addEdge('C','G');
graph.addEdge('C','D');
graph.addEdge('D','G');
graph.addEdge('D','H');
graph.addEdge('B','E');
graph.addEdge('B','F');
graph.addEdge('E','I');

//深度优先搜索
graph.dfs();

//广度优先搜素
graph.bfs(myVertices[6]);
/**
 *
 打印结果
 A->B C D
 B->A E F
 C->A G D
 D->A C G H
 E->B I
 F->B
 G->C D
 H->D
 I->E
 * */