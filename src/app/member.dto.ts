export class Member {
    public _id: string;
    public Mobile: number;
    public Name: string;
    public Type: string;
    public Date: string;
    public Time: string;
    public ID: string;
    public Count: number;

}

export class MemberList {
    public members: Array<Member>;
}
