

namespace ST.DATA{

  export abstract class NodeConnecter{
    protected abstract　doIsAccept():boolean;

    public get OK():boolean{
      return this.doIsAccept();
    }

  }

  export class ActionConnecter extends NodeConnecter{
    protected doIsAccept(): boolean {
      return this.$act();
    }
    private $act;
    public constructor(Act:()=>boolean){
      super();
      this.$act=Act;
    }
  }
}

