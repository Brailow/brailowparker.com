void setup(){
  size(850, 850);
  background(255,255,255);
}

float phi = 1.618033988749895;
int j = 1;
int iterations = 550;

public float[][] getCoordinates() {
  float[][] coordinates = new float[iterations][];
  for (int t = 0; t < iterations; t++) {
    for (int k = 1; k < 10; k++) {
      coordinates[t] = new float[]{sin(t) * t * k / 10, cos(t) * t * k / 10};
    }
  }
  return coordinates;
}

void draw(){
  float t = (float)frameCount;
  translate(width/2, height/2);
  float[][] coordinates = getCoordinates();
  background(255, 255, 255);
  for (int i = 0; i < iterations; i++) {
    float x = coordinates[i][0];
    float y = coordinates[i][1];
    stroke(0,0,0,30);
    if (i < iterations / 3) {
      fill(0,0,0, 50);
    }
    else {
      fill(random(255),random(255),random(255), 30);
    }
    
    ellipse(x * sin(t / 100), y * sin(t / 100), 75, 75);
  }
  //fill(0,0,0);
  //llipse(coordinates[frameCount % 450][0] * sin(t / 100), coordinates[frameCount % 450][1] * sin(t / 100), 75, 75);
  
//  for (int i = 1; i < 10; i+= 1) {
//  fill(random(255), random(255), random(255), 30);
//  ellipse(sin(t * phi) * t * i / 10, cos(t * phi) * t * i / 10, 50, 50);
//  fill(0, 0, 0);
//  ellipse(sin(t * phi) * t * i / 10, cos(t * phi) * t * i / 10, 20, 20);
//  }
//  j++;
//  System.out.println(j);
}
