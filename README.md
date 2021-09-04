# nuaudit. Browser SDK

## Installation

`yarn install nuaudit-browser-sdk`

## Usage

```ts
const nuaudit = new Nuaudit(
    "API_KEY_SECRET",
    "ORGANIZATION_ID",
    "TRAIL_ID"
)

(async () => {
    await nuaudit.createRecord(
        "Added artwork to the gallery.",
        {
            "type": "human",
            "id": "jane",
            "name": "Jane",
            "email": "jane@example.org",
            "ipAddress": "127.0.0.1"
        },
        {
            "type": "artwork",
            "id": "thepainting",
            "title": "The painting",
            "material": "canvas",
            "paint": "oil",
            "year": 2018
        }
    )
)()
```