import { Request, Response } from "express";
import { sendCreated, sendSuccess } from "../handlers/successHandler";
import { getCertifications, getCertiByIdService, 
    createCertiService, updateCertiService, deleteCertiService} from "../services/certiMarianaService";

export const getCertisController = async (req: Request, res: Response) => {
    try {
      const certis = await getCertifications();
      if (!certis){
        return res.status(404).json({success: false, message: 'Certis not found'})
      }
      sendSuccess(res, certis, 'Certis retrived succesfully');
    } catch (error) {
      res.status(500).json({success: false, message: 'Internal server error'})
    }
  };
  export const getCertisByIdController = async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
      const certi = await getCertiByIdService(id);
      if (!certi){
        return res.status(404).json({success: false, message: 'Certis not found'})
      }
      sendSuccess(res, certi, 'Certis retrived succesfully');
    } catch (error) {
      res.status(500).json({success: false, message: 'Internal server error'})
    }
  };
  export const createCertiController = async (req: Request, res: Response) => {
    try {
      const {body} = req;
        const certi = await createCertiService(body);
      sendCreated(res, certi, 'Certis created succesfully');
    } catch (error) {
      res.status(500).json({success: false, message: 'Internal server error'})
    }
  }; 
  export const updateCertiController = async (req: Request, res: Response) => {
    try {
      const {body, params} = req;
        const certi = await updateCertiService(body, params.id);
      sendCreated(res, certi, 'Certis created succesfully');
    } catch (error) {
      res.status(500).json({success: false, message: 'Internal server error'})
    }
  }; 
  export const deleteCerticontroller = async (req: Request, res: Response) => {
    try {
      const {id} = req.params;
        const certi = await deleteCertiService(id);
      sendCreated(res, certi, 'Certis deleted succesfully');
    } catch (error) {
      res.status(500).json({success: false, message: 'Internal server error'})
    }
  }; 