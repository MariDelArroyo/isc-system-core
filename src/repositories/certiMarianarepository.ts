import db from './pg-connection';

const tableName = 'certi_mariana';

export const getCertis = async () => {
    try{
        const certis = await db(tableName).select('*');
        return certis;
    } catch (error) {
        console.error('Error in CertiMarianaRepository.getCertis', error);
        throw new Error('Error fetching Certis')
    }
};
export const getCerti = async (id: string) => {
    try{
        const certi = await db(tableName).where('id', id).first();
        return certi;
    } catch (error) {
        console.error('Error in CertiMarianaRepository.getCertis', error);
        throw new Error('Error fetching Certis')
    }
};
export const createCerti = async (certi: any) => {
    try{
        const certiResponse = await db(tableName).insert(certi).returning('*');
        return certiResponse;
    } catch (error) {
        console.error('Error in CertiMarianaRepository.getCertis', error);
        throw new Error('Error fetching Certis')
    }
};
export const updateCerti = async (certi: any, id:string) => {
    try{
        const certiResponse = await db(tableName).where('id', id).update(certi).returning('*');
        return certiResponse;
    } catch (error) {
        console.error('Error in CertiMarianaRepository.getCertis', error);
        throw new Error('Error updating Certis')
    }
};
export const deleteCerti = async (id:string) => {
    try{
        const certiDeleted = await db(tableName).where('id', id).delete().returning('*');
        return certiDeleted;
    } catch (error) {
        console.error('Error in CertiMarianaRepository.getCertis', error);
        throw new Error('Error updating Certis')
    }
};