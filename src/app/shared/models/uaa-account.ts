export class UaaAccount {
  constructor(
    public id: number,
    public login: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public imageUrl: string,
    public activated: boolean,
    public langKey: string,
    public createdBy: string,
    public createdDate: Date,
    public lastModifiedBy: string,
    public lastModifiedDate: Date,
    public authorities: string[]) { }

  public static fromJson(json): UaaAccount {
    return new UaaAccount(json.id, json.login, json.firstName, json.lastName, json.email, json.imageUrl, json.activated,
      json.langKey, json.createdBy, json.createdDate, json.lastModifiedBy, json.lastModifiedDate, json.authorities);
  }

  public getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
