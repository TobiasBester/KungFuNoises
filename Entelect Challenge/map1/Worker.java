public class Worker {

  public int xLoc = 0;
  public int yLoc = 0;
  public Boolean hasResource = false;
  public Boolean hasDeposited = false;
  private Map theMap;

  Worker(int x, int y, Map theMap) {
    this.xLoc = x;
    this.yLoc = y;
    this.theMap = theMap;
  }

  public void StartWorking() {
    System.out.println("Started Working");
    while (hasResource == false) {
      getResource();
    }
  }

}
