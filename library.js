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

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = (library) => {
  const playlists = library.playlists; // grab playlist object inside library for easier access
  for (let playlistId in playlists) { // iterate through the playlists of the playlist object
    const playlist = playlists[playlistId]; // grab specific playlist object 
    const numberOfTracks = playlist.tracks.length; // grab number of tracks
		// ie. p00: Playlist Name - # track(s if multiple tracks)
    console.log(`${playlist.id}: ${playlist.name} - ${numberOfTracks}} track${numberOfTracks !== 1 ? 's' : ''}`);
  }
};

console.log("printPlaylists Function")
printPlaylists(library);
console.log("--------")

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = (library) => {
	const tracks = library.tracks;
	for (let trackId in tracks) {
		const track = tracks[trackId];
		const trackAlbum = track.album;
		// ie. t00: Track Name by Artist (Album)
		console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`)
	}
};

console.log("printTracks Function")
printTracks(library);
console.log("-------")


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

const printPlaylist = (library, playlistId) => {
	const playlist = library.playlists[playlistId]; // make specific playlist sub-object easier to access
	const tracks = library.tracks // make track sub-object easier to access
	// ie. p00: Name of Playlist - # track(add s if multiple tracks)
	console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} track${playlist.tracks.length !==1 ? 's' : ''}`) 
	playlist.tracks.forEach((trackId) => { // for each track value listed in specified playlists tracks key
		const track = tracks[trackId]; // use given track id to access information from tracks object
		// ie. t00: Name of Track by Artist (Album)
		console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`)
	})
};

// TEST CASE
console.log("printPlaylist Function")
printPlaylist(library, "p01")
console.log("--------")
printPlaylist(library, "p02")


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
};


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(name, artist, album) {

};


// adds a playlist to the library
const addPlaylist = function(name) {

};


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

};