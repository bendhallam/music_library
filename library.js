// LIBRARY OBJECT IMPLEMENTATION

const library = {
  tracks: { t01: { id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" },
  t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
  t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"}
  },
  playlists: { p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  }
};


/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

console.log("Printing Library...");
console.log(library); // display initial library object

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = (library) => {
  const playlists = library.playlists; // grab playlist object inside library for easier access
  for (let playlistId in playlists) { // iterate through the playlists of the playlist object
    const playlist = playlists[playlistId]; // grab specific playlist object
    const numberOfTracks = playlist.tracks.length; // grab number of tracks
    // ie. p00: Playlist Name - # track(s if multiple tracks)
    console.log(`${playlist.id}: ${playlist.name} - ${numberOfTracks} track${numberOfTracks !== 1 ? 's' : ''}`);
  }
};


// TEST
console.log("Printing Playlists...");
printPlaylists(library);


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = (library) => {
  const tracks = library.tracks; // make the tracks subjobject easier to access
  for (let trackId in tracks) { // iterate through the tracks
    const track = tracks[trackId]; // make the individual tracks easier to access
    // ie. t00: Track Name by Artist (Album)
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
  }
};

// TEST
console.log("Printing Tracks...");
printTracks(library); // Should display
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = (library, playlistId) => {
  const playlist = library.playlists[playlistId]; // make specific playlist sub-object easier to access
  const {tracks} = library; // make track sub-object easier to access (learned this method today in lecture)
  // ie. p00: Name of Playlist - # track(add s if multiple tracks)
  console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} track${playlist.tracks.length !== 1 ? 's' : ''}`);
  playlist.tracks.forEach((trackId) => { // for each track value listed in specified playlists tracks key
    const track = tracks[trackId]; // use given track id to access information from tracks object
    // ie. t00: Name of Track by Artist (Album)
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
  });
};


// TEST
console.log("Printing Playlist 'p02'...");
printPlaylist(library, "p02");
// should display
// p02: Other Playlist - 1 track
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
console.log("Printing Playlist 'p01'...");
printPlaylist(library, "p01");
// should display
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(library, trackId, playlistId) {
  const playlist = library.playlists[playlistId]; // specify this playlist to make it easier to reference
  playlist.tracks.push(trackId); // add track to tracks object within library
};

// TEST
console.log("Adding Track 't03' to Playlist 'p01'");
addTrackToPlaylist(library, "t03", "p01");
printPlaylist(library, "p01"); // playlist should now include t03


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(newName, newArtist, newAlbum) {
  const Uid = generateUid(); // generate an id for new track
  library.tracks[Uid] = { // add new track as an object with chosen values
    id: Uid,
    name: newName,
    artist: newArtist,
    album: newAlbum
  };
};


// TEST
console.log("Adding Track");
addTrack("Big Iron", "Willy Nelson", "Willy's Big Day");
console.log(library); // should display new track in the tracks object

// adds a playlist to the library
const addPlaylist = function(newName) {
  const Uid = generateUid();
  library.playlists[Uid] = {
    id: Uid,
    name: newName,
    tracks: []
  };
};

// TEST
console.log("Adding Playlists...");
addPlaylist("My Brand New Playlist");
console.log(library); // should display the "My Brand New Playlist" in the playlists section of the library
addPlaylist("Another Playlist");
console.log(library); // should display both "My Brand New Playlist" AND "Another Playlist"

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = (query) => {
  console.log(`Searching tracks for "${query.toLowerCase()}"...`); // Display what is being searched
  for (const trackId in library.tracks) { // iterate through the "track" objects of the "tracks" subobject in library
    const track = library.tracks[trackId]; // make the track object itself easier to access
    if (
    // use .toLowerCase() on both the searched object and the query to ensure case insensitivity
    // NOTE: .toLowerCase() returns either the position where the query is first found OR -1 if the string is not found
      track.name.toLowerCase().search(query.toLowerCase()) !== -1 || // search names
      track.artist.toLowerCase().search(query.toLowerCase()) !== -1 || // search artist
      track.album.toLowerCase().search(query.toLowerCase()) !== -1 // search album
    ) {
      console.log(track);
    }
  }
};


// TEST
printSearchResults("Four"); // should print out the t03 object
printSearchResults("Three"); // should print out the t01 and t03 objects


