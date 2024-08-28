import { getCertis, getCerti, createCerti, updateCerti, deleteCerti } from "../repositories/certiMarianarepository"

export const getCertifications = async () => {
try {
    const certis = await getCertis();
    //logica de negocio
    return certis;
 } catch (error) {
    console.error('Error in CertiMarianaRepository. getCertis', error)
    throw new Error('Error fetching Certis')
    }
};
export const getCertiByIdService = async (id: string) => {
    try {
        const certi = await getCerti(id);
        //logica de negocio
        return certi;
     } catch (error) {
        console.error('Error in CertiMarianaRepository. getCertis', error)
        throw new Error('Error fetching Certis')
        }
    };
export const createCertiService = async (certi: any) => {
    try {
        const certiResponse = await createCerti(certi);
        //logica de negocio
        return certiResponse;
     } catch (error) {
        console.error('Error in CertiMarianaRepository. getCertis', error)
        throw new Error('Error fetching Certis')
        }
    };
    export const updateCertiService = async (certi: any, id:string) => {
        try {
            const certiResponse = await updateCerti(certi,id);
            return certiResponse;
         } catch (error) {
            console.error('Error in CertiMarianaRepository. getCertis', error)
            throw new Error('Error fetching Certis')
            }
        };
        export const deleteCertiService = async (id:string) => {
            try {
                const certiDeleted = await deleteCerti(id);
                return certiDeleted;
             } catch (error) {
                console.error('Error in CertiMarianaRepository. getCertis', error)
                throw new Error('Error fetching Certis')
                }
            };