
const ArtistAPI = {
    artists: [
        { id: 1, name: "allanxaesthetics", soundcloudLink: "soundcloud.com/kurenobeats" },
        { id: 2, name: "Dark Fade Ricochet", soundcloudLink: "soundcloud.com/dfr" },
        { id: 3, name: "Pyrex Vuitton", soundcloudLink: "soundcloud.com/pv" },
        { id: 4, name: "DPIH", soundcloudLink: "soundcloud.com/dpih" },
        { id: 5, name: "Yun J", soundcloudLink: "soundcloud.com/yunj" },
        { id: 6, name: "KC", soundcloudLink: "soundcloud.com/KC" }
    ],
    all: function() { return this.artists },
    get: function(id) { 
        const isArtist = a => a.id === id;
        return this.artists.find(isArtist);
    }
};

export default ArtistAPI;