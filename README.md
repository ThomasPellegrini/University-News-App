# University-News-App
React native news app that displays news articles from Bicocca University. 

[![1.jpg](https://i.postimg.cc/sg5ykdh3/1.jpg)](https://postimg.cc/cv1V3zhz)
[![2.jpg](https://i.postimg.cc/mk1K7C3T/2.jpg)](https://postimg.cc/D4FCTWYN)

This app was developed using Redux because it makes the state predictable. If the same state and action are passed to a reducer, the same result is always produced because reducers are pure functions. The state is also immutable and is never changed.
In this case Redux is a bit overkill because this isn't a huge application. I just wanted to try it for fun :D.

[![4.png](https://i.postimg.cc/FKmfqx1n/4.png)](https://postimg.cc/mPX21CYQ)

This is the logic that I used to develop this app. The data fetching of News.js, Alert.js, Events.js could have been done with React's fetch function but I decided to use Axios as it guarantees more control over the responses. NewsDetails.js has the task of just rendering the text.

[![3.png](https://i.postimg.cc/Kv2R4NDc/3.png)](https://postimg.cc/8sZ10LYx)
