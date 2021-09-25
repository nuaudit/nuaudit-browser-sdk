import { createConfiguration, RecordsApi, Record as NuauditRecord } from "nuaudit-browser-autogen"

class Nuaudit {
    private recordsApi: RecordsApi;

    constructor(private apiKey: string, private organizationId: string, private trailId: string) {
        this.recordsApi = new RecordsApi(createConfiguration({
            authMethods: {"APIKeyHeader": this.apiKey}
        }))
    }

    async createRecord(description: string, actor: Record<any, any>, resource: Record<any, any>) {
        await this.recordsApi.createRecord(this.organizationId, this.trailId, {
            description: description,
            actorRecord: {
                data: actor
            },
            resourceRecord: {
                data: resource
            }
        })
    }

    async listRecords(): Promise<NuauditRecord[]> {
        return this.recordsApi.listTrailRecords(this.organizationId, this.trailId)
    }
}

export default Nuaudit;