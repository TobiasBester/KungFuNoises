public class Depot {

  private int xLoc = 0;
  private int yLoc = 0;
  private Map theMap;
  private Character letter;
  public boolean receivedResource = false;

  Depot(Map theMap, int xLoc, int yLoc, Character letter) {
    // System.out.println("Found a depot at " + xLoc + "," + yLoc);
    this.theMap = theMap;
    this.letter = letter;
    this.xLoc = xLoc;
    this.yLoc = yLoc;
  }

  int getXLoc() {
    return xLoc;
  }

  int getYLoc() {
    return yLoc;
  }

  Character getLetter() {
    return letter;
  }

}
