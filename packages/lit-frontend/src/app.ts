import { consume, createContext, provide } from "@lit/context";
import { property, state } from "lit/decorators.js";
import * as MVU from "./mvu";
import { MsgType } from "./mvu";
import { AuthenticatedUser, APIUser } from "./rest";
import { Profile, Credential, PageViewer } from "ts-models";

export interface Model {
  credential?: Credential;
  user: APIUser;
  profile?: Profile;
  pageViewer?: PageViewer;
}

export const context = createContext<Model>("CTModel");

export const init: Model = {
  user: new APIUser(),
};

export interface UserLoggedIn extends MsgType<"UserLoggedIn"> {
  user: AuthenticatedUser;
}

export interface ProfileSelected extends MsgType<"ProfileSelected"> {
  userid: string;
}

export interface ProfileSaved extends MsgType<"ProfileSaved"> {
  userid: string;
  profile: Profile;
}

export interface PageViewerSelected extends MsgType<"PageViewerSelected"> {
  pageid: string;
}

export interface PageViewerSaved extends MsgType<"PageViewerSelected"> {
  pageid: string;
  content: string;
}

export type Message =
  | ProfileSelected
  | ProfileSaved
  | UserLoggedIn
  | PageViewerSelected;

export class Main
  extends MVU.Main<Model, Message>
  implements MVU.App<Model, Message>
{
  @provide({ context })
  @state()
  model: Model = init as Model;

  constructor(update: MVU.Update<Model, Message>) {
    super(
      update,
      () => this.model,
      (next: Model) => (this.model = next)
    );
  }
}

export class View extends MVU.View<Message> {
  @consume({ context: context, subscribe: true })
  @property({ attribute: false })
  _model: Model | undefined;

  getFromModel<T>(key: keyof Model) {
    if (this._model) {
      return this._model[key] as T;
    }
  }
}

export const createDispatch = () => new MVU.Dispatch<Model, Message>();

export const updateProps = MVU.updateProps<Model>;
export const noUpdate = MVU.noUpdate<Model>;
