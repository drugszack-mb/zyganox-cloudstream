const manifest = {
    name: "All-In-One Movies & Anime",
    id: "com.custom.allinone",
    version: 1,
    tvTypes: ["Movie", "TvSeries", "Anime"],
    language: "en"
};

class UniversalProvider {
    constructor() {
        this.mainUrl = "https://123movies.com"; 
    }

    async getMainPage() {
        return []; 
    }

    async search(query) {
        return []; 
    }

    async loadLinks(url) {
        return []; 
    }
}

export default UniversalProvider;
