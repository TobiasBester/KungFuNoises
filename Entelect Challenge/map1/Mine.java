public class Mine {

  public int xLoc = 0;
  public int yLoc = 0;
  private Map theMap;
  private Character letter;
  public boolean pickedUp = false;

  Mine(Map theMap, int xLoc, int yLoc, Character letter) {
    // System.out.println("Found a mine at " + xLoc + "," + yLoc);
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
