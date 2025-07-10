import api from '@/features/shared/lib/axios';

export const trackerHome = async () => {
  try {
    const res = await api.get('/bar-home');
    return res.data;
  } catch (e) {
    console.error('Pengambilan data gagal', e);
  }
};

export const trackerParticle = async (
  id: number,
  status: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/particle', {
      particle_id: id,
      status: status,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Operasi perbaharuan data gagal: ', e);
  }
};

export const trackerKatakana = async (
  id: number,
  status: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/katakana', {
      katakana_id: id,
      status: status,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Operasi perbaharuan data gagal: ', e);
  }
};

export const trackerHiragana = async (
  id: number,
  status: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/hiragana', {
      hiragana_id: id,
      status: status,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Operasi perbaharuan data gagal: ', e);
  }
};

export const trackerBasicCnversation = async (
  id: number,
  status: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/basic-conversation', {
      basic_conversation_id: id,
      status: status,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Operasi perbaharuan data gagal: ', e);
  }
};

export const trackerKanjiN5 = async (
  kanjiId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    console.log('id kanji di api tracker:', kanjiId);
    const res = await api.post('/tracker/kanji', {
      kanji_id: kanjiId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Pengambilan data gagal - ', e);
  }
};

export const trackerAdjectiveN5 = async (
  adjectiveId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/adjective', {
      adjective_id: adjectiveId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Pengambilan data gagal - ', e);
  }
};

export const trackerAdverb = async (
  adverbId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/adverb', {
      other_word_id: adverbId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};

export const trackerVerb = async (
  verbId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/verb', {
      verb_id: verbId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};

export const trackerConjunction = async (
  conjunctionId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/conjunction', {
      conjunction_id: conjunctionId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};

export const trackerQuestionWord = async (
  questionWordId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/question-word', {
      other_word_id: questionWordId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};

export const trackerNounActivity = async (
  activityId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/noun-activity', {
      noun_id: activityId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};

export const trackerNounAnimalAndPlant = async (
  animalAndPlantId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/noun-animalplant', {
      noun_id: animalAndPlantId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};

export const trackerNounAuxNumber = async (
  auxNumberId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/noun-auxnumber', {
      noun_id: auxNumberId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};

export const trackerNounBody = async (
  bodyId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/noun-body', {
      noun_id: bodyId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};

export const trackerNounCity = async (
  cityId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/noun-city', {
      noun_id: cityId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};

export const trackerNounColor = async (
  colorId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/noun-color', {
      noun_id: colorId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};

export const trackerNounFoodAndDrink = async (
  foodAndDrinkId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/noun-fooddrink', {
      noun_id: foodAndDrinkId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};

export const trackerNounHomeAppliances = async (
  homeappliancesId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/noun-homeappliances', {
      noun_id: homeappliancesId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};

export const trackerNounKosoado = async (
  kosoadoId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/noun-kosoado', {
      noun_id: kosoadoId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};

export const trackerNounMedia = async (
  mediaId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/noun-media', {
      noun_id: mediaId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};

export const trackerNounNatural = async (
  naturalId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/noun-natural', {
      noun_id: naturalId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};

export const trackerNounNumber = async (
  numberId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/noun-number', {
      noun_id: numberId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};

export const trackerNounOutfit = async (
  outfitId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/noun-outfit', {
      noun_id: outfitId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};

export const trackerNounPeople = async (
  peopleId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/noun-people', {
      noun_id: peopleId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};

export const trackerNounPosition = async (
  positionId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/noun-position', {
      noun_id: positionId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};

export const trackerNounRegion = async (
  regionId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/noun-region', {
      noun_id: regionId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};

export const trackerNounSchool = async (
  schoolId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/noun-school', {
      noun_id: schoolId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};

export const trackerNounTime = async (
  timeId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/noun-time', {
      noun_id: timeId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};

export const trackerNounTraffic = async (
  trafficId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/noun-traffic', {
      noun_id: trafficId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};

export const trackerNounWork = async (
  workId: number,
  currentStatus: boolean,
  setterUpdatedData: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.post('/tracker/noun-work', {
      noun_id: workId,
      status: currentStatus,
    });
    setterUpdatedData(false);
    return res;
  } catch (e) {
    console.error('Update status gagal - ', e);
  }
};
