const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Leif",
                    last: "Harb"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/87.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/87.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/87.jpg"
                },
                login: {
                    username: "ThePhonyGOAT"
                }
            }
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}
