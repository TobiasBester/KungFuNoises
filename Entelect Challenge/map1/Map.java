import java.util.ArrayList;
import java.util.Arrays;

public class Map {
  private Character[][] theMap;
  private int worker_count = 0;
  private int numRows = 0;
  private int numCols = 0;
  private ArrayList<Worker> workers = new ArrayList<Worker>();

  Map(ArrayList<String> mapArray, int worker_count) {
    this.numRows = mapArray.size();
    this.numCols = mapArray.get(0).length();
    theMap = new Character[this.numRows][this.numCols];
    for (int i=0; i < this.numRows; i++) {
      for (int j=0; j < this.numCols; j++) {
        theMap[i][j] = mapArray.get(i).charAt(j);
      }
    }

    createWorkers();
    lookForResources();
  }

  private void createWorkers() {
    for (int i = 0; i < worker_count; i++) {
      Worker newWorker = new Worker(0, 0, this);
      workers.add(newWorker);
    }
  }

  public void startWorkers() {
    for (int i = 0; i < worker_count; i++ ) {
      workers.get(i).StartWorking();
    }
  }

  public Character getMapCoord(int x, int y) {
    return this.theMap[x][y];
  }

  public int getNumRows() {
    return this.numRows;
  }

  public int getNumCols() {
    return this.numCols;
  }

  public int getWorkerCount() {
    return this.worker_count;
  }

  public void printMap() {
    for (int i = 0; i < numRows; i++) {
      String output = Arrays.toString(theMap[i]);
      System.out.println(output);
    }
  }

}
