import { createConfiguration, RecordsApi } from "nuaudit-browser-autogen"

class Nuaudit {
    private recordsApi: RecordsApi;

    constructor(private apiKey: string, private organizationId: string, private trailId: string) {
        this.recordsApi = new RecordsApi(createConfiguration({
            authMethods: {"APIKeyHeader": this.apiKey}
        }))
    }

    async createRecord(description: string, identity: Record<any, any>, resource: Record<any, any>) {
        await this.recordsApi.createRecord(this.organizationId, this.trailId, {
            description: description,
            identityRecord: {
                data: identity
            },
            resourceRecord: {
                data: resource
            }
        })
      }
}

export default Nuaudit;