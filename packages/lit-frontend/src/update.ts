import { APIRequest, JSONRequest } from "./rest";
import * as App from "./app";

import { Profile, PageViewer } from "ts-models";

const dispatch = App.createDispatch();
export default dispatch.update;

dispatch.addMessage("UserLoggedIn", (msg: App.Message, model: App.Model) => {
  const { user } = msg as App.UserLoggedIn;

  return App.updateProps({ user })(model);
});

dispatch.addMessage("ProfileSelected", (msg: App.Message) => {
  const { userid } = msg as App.ProfileSelected;

  return new APIRequest()
    .get(`/profiles/${userid}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Profile:", json);
        return json as Profile;
      }
    })
    .then((profile: Profile | undefined) =>
      profile ? App.updateProps({ profile }) : App.noUpdate
    );
});

dispatch.addMessage("ProfileSaved", (msg: App.Message) => {
  const { userid, profile } = msg as App.ProfileSaved;

  return new JSONRequest(profile)
    .put(`/profiles/${userid}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Profile:", json);
        json as Profile;
      }
      return undefined;
    })
    .then((profile: Profile | undefined) =>
      profile ? App.updateProps({ profile }) : App.noUpdate
    );
});

dispatch.addMessage("PageViewerSelected", (msg: App.Message) => {
  const { pageid } = msg as App.PageViewerSelected;

  return new APIRequest()
    .get(`/pages/${pageid}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("PageViewer:", json);
        return json as PageViewer;
      }
    })
    .then((page: PageViewer | undefined) =>
      page ? App.updateProps({ page }) : App.noUpdate
    );
});

dispatch.addMessage("PageViewerSaved", (msg: App.Message) => {
  const { pageid, content } = msg as App.PageViewerSaved;

  return new JSONRequest({ content })
    .put(`/pages/${pageid}`)
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("PageViewer:", json);
        return json as PageViewer;
      }
      return undefined;
    })
    .then((page: PageViewer | undefined) =>
      page ? App.updateProps({ page }) : App.noUpdate
    );
});
