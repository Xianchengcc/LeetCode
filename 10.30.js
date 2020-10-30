/*
 * @Author: xiancheng
 * @Date:   2020-10-30 09:18:54
 * @Last Modified by:   xiancheng
 * @Last Modified time: 2020-10-30 09:18:57
 */
/**给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域。

网格中的格子水平和垂直方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/island-perimeter
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let land = 0,border = 0;
  
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] ) {
          land++;
          if (i < grid.length - 1 && grid[i + 1][j]) {
            border++;
          }
          if (j < grid[0].length - 1 && grid[i][j + 1]) {
            border++;
          }
        }
      }
    }
    return 4 * land - 2 * border;
  };