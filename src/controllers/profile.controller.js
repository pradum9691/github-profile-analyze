
import {saveProfile, getAllProfiles, getProfileById} from "../models/profile.model.js";
import getGithubPro from "../services/github.service.js";


const analyzeProfile = async (req, res) => {
  try {
    const { username } = req.params;

    const profile = await getGithubPro(username);

    await saveProfile(profile);

    return res.status(200).json({
      success: true,
      message: "Profile analyzed and saved successfully",
      data: profile,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getProfiles = async (req, res) => {
  try {
    const profiles = await getAllProfiles();

    res.status(200).json({
      success: true,
      data: profiles,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getProfile = async (req, res) => {
  try {
    const profile = await getProfileById(req.params.id);

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export { analyzeProfile, getProfiles, getProfile };