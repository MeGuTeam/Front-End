import api from "@/features/shared/lib/axios";

export async function getParticle(setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) {
  try {
    const res = await api.get("/particle");
    console.log("Respon yang didapat dari fungsi getParticle pada services: ", res);
    setterUpdatedData(true);
    return res.data.data;
  } catch (e) {
    console.error("Pengambilan data dari fungsi getParticle pada services gagal - ", e);
  }
}

export const getHiragana = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get('/hiragana');
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Pengambilan data dari fungsi getHiragana pada services gagal - ", e);
    }
}

export const getKatakana = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/katakana");
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Pengambilan data dari fungsi getKatakana pada services gagal - ", e);
    }
}

export const getBasicConversation = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/basic-conversation");
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Pengambilan data dari fungsi getBasicConversation pada services gagal - ", e);
    }
}

export const getKanjiN5 = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/kanji-n5");
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data kanji n5 gagal - ", e);
    }
}

export const getAdjectiveN5 = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/adjective-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data adjective n5 gagal - ", e);
    }
}

export const getAdverbN5 = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/adverb-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data adverb n5 gagal - ", e);
    }
}

export const getVerbN5 = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/verb-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data verb n5 gagal - ", e);
    }
}

export const getConjunctionN5 = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/conjunction-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data conjunction n5 gagal - ", e);
    }
}

export const getQuestionWord = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/question-word-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data questionword n5 gagal - ", e);
    }
}

export const getNounActivityN5 = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/noun-activity-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data NounActivityN5 gagal - ", e);
    }
}

export const getNounAnimalAndPlant = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/noun-animalplant-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data NounAnimalAndPlant gagal - ", e);
    }
}

export const getNounAuxNumber = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/noun-auxnumber-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data gagal - ", e);
    }
}

export const getNounBody = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/noun-body-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data gagal - ", e);
    }
}

export const getNounCity = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/noun-city-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data gagal - ", e);
    }
}

export const getNounColor = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/noun-color-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data gagal - ", e);
    }
}

export const getNounFoodAndDrink = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/noun-fooddrink-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data gagal - ", e);
    }
}

export const getNounHomeAppliances = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/noun-homeappliances-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data gagal - ", e);
    }
}

export const getNounKosoado = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/noun-kosoado-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data gagal - ", e);
    }
}

export const getNounMedia = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/noun-media-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data gagal - ", e);
    }
}

export const getNounNatural = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/noun-natural-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data gagal - ", e);
    }
}

export const getNounNumber = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/noun-number-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data gagal - ", e);
    }
}

export const getNounOutfit = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/noun-outfit-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data gagal - ", e);
    }
}

export const getNounPeople = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/noun-people-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data gagal - ", e);
    }
}

export const getNounPosition = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/noun-position-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data gagal - ", e);
    }
}

export const getNounRegion = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/noun-region-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data gagal - ", e);
    }
}

export const getNounSchool = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/noun-school-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data gagal - ", e);
    }
}

export const getNounTime = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/noun-time-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data gagal - ", e);
    }
}

export const getNounTraffic = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/noun-traffic-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data gagal - ", e);
    }
}

export const getNounWork = async (setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const res = await api.get("/noun-work-n5");
        console.log("Respon dari server: ", res);
        setterUpdatedData(true);
        return res.data.data;
    } catch (e) {
        console.error("Operasi pengambilan data gagal - ", e);
    }
}