import { createConfiguration, RecordsApi } from "nuaudit-typescript-autogen"

class Nuaudit {
    private recordsApi: RecordsApi;

    constructor(private apiKey: string, private organizationId: string, private trailId: string) {
        this.recordsApi = new RecordsApi(createConfiguration({
            authMethods: {"APIKeyHeader": this.apiKey}
        }))
    }

    createRecord(description: string, identity: Record<any, any>, resource: Record<any, any>): void {
        this.recordsApi.createRecord(this.organizationId, this.trailId, {
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