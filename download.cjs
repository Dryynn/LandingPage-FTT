const fs = require('fs');
const http = require('http');
const path = require('path');

const assets = {
  imgSimboloFtt: "http://localhost:3845/assets/1992bc6bc9110fddf5761239ad4388fff59313c2.svg",
  imgLogocurso1: "http://localhost:3845/assets/20fff9286b684d964604f3ea7cdf7ddf8b213b20.png",
  imgLogouni1: "http://localhost:3845/assets/d2b4878cbb1a019395d3132073abcf617e73e061.png",
  imgCircled5: "http://localhost:3845/assets/1b52b9c8a4fd3e1e37857be0842fee854558dd5a.png",
  imgCircled4: "http://localhost:3845/assets/89e1e21cc506e5135d71fd5661730c9d6d03c249.png",
  img1st: "http://localhost:3845/assets/b970108d2c2b1c1f92ed5de4ecf90120ed62ea2c.png",
  imgImage: "http://localhost:3845/assets/ec3ccef7a8906c7eaa4eecde3292002ddd2d701c.png",
  imgDep2: "http://localhost:3845/assets/fe06ce2850bec8a4c6236183370f6932031fa179.svg",
  imgName: "http://localhost:3845/assets/a87012a77c25240873b5eb267340cde7be6d4703.png",
  imgGetQuote: "http://localhost:3845/assets/7e6ac7ae9637601b2090f33bb93fb6b0f616bf3c.png"
};

const dir = path.join(__dirname, 'src', 'assets', 'figma');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

Object.entries(assets).forEach(([name, url]) => {
  const ext = url.split('.').pop();
  const filePath = path.join(dir, `${name}.${ext}`);
  
  http.get(url, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(filePath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${name}`);
      });
    } else {
      console.log(`Failed to download ${name}: ${res.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${name}: ${err.message}`);
  });
});
