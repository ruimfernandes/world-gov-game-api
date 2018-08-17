import helpers from "../../helpers/helpers";

export class MeController {
  me(req, res) {
    helpers.successResponse(res)(req.user);
  }
}

export default new MeController();
