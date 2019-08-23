<p align="center">
	<h1 align="center">Twitch clone app</h1>
	<p align="center"> A streaming website created by React, Redux, Google 			APIs and more
	</p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Project Structure](#project-structure)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)

<!-- ABOUT THE PROJECT -->

## About The Project

A quick demo: _stream my screen using OBS_

![Demo](https://www.dropbox.com/s/ecg4fjwub344ure/demo.gif?dl=1)

Why do I create this project:

- To practice my React and Redux skills.
- To explore and dive into OAuth 2.0 and Google APIs.
- Learn how a RTMP server works.
- Kill my free time 😅.

### Built With

- [React](https://reactjs.org/) (of course 🙃)
- [Redux](https://redux.js.org/), [Redux-form](https://redux-form.com/8.2.2/)
- [json-server](https://github.com/typicode/json-server), [node-media-server](https://github.com/illuspas/Node-Media-Server)

<!-- GETTING STARTED -->

## Getting Started

Since this is just a fun project, I decide not to deploy this app online. So you can follow these steps to run it locally!

### Prerequisites

Make sure you have Node, npm and React in your machine. But you also need [OBS](https://obsproject.com/) to push a stream to the website!

### Project structure:

```bash
├── stream
    ├── client
    ├── stream_apis
    ├── streams_rtmpserver
```

### Installation

1. Create project directory in your machine:

```sh
mkdir streams
cd streams/
```

3. Clone the repositories:

```sh
git clone https://github.com/phuongminh2303/twitch_stream_clone.git
git clone https://github.com/phuongminh2303/stream_api.git
git clone https://github.com/phuongminh2303/streams_rtmpserver.git
```

4. Install NPM packages in **each folder** of the project:

```sh
npm install
```

5. Run all the **client server**, **api server** and **rtmp server** at the same time:
   ![Start server](https://dl.dropboxusercontent.com/s/9l5k7a7f3k5t33u/start_server.gif?dl=0)

<!-- USAGE EXAMPLES -->

## Usage

You can follow these steps to deploy a new stream to the app:

1. Sign in using your google account (It's totally **safe** 😉).
2. Create a new stream using the "Create a stream" button.
3. Click on the stream you've just created. You will see something like this:
   ![Show stream](https://www.dropbox.com/s/0qyg1q3eo4i1e3x/test_stream.png?dl=1)
4. Now open OBS and create a new stream:

- Create new scene in "Scenes" section.
- In the "Sources" section, add "Screen Capture (XSHM)" and "Audio Input Capture".
- Next, open Settings/Stream, then choose "Custom..." in Service section.
- Add this line to the Server section: `rtmp://localhost/live`
- Put your stream id into the "Stream Key" section, **stream id** can be found in your stream url:
  -- In this example, my stream url is: _localhost:3000/streams/5_. So my **stream id** is 5!
- Click Ok then start your stream. Go back to the website and enjoy!!! 😙
- Sometime you need to refresh the page after starting a new stream.

<!-- ROADMAP -->

## Roadmap

My only plan for this project is the UI. I will improve the layout, colors, reponsiveness very soon!

<!-- CONTRIBUTING -->

## Contributing

Feel free to contribute to this awful project! I always want to learn new stuffs!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
