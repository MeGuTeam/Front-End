import api from '@/features/shared/lib/axios';

export const uploadAvatar = async (file: File) => {
  const formData = new FormData();
  formData.append('avatar', file);

  try {
    const res = await api.post('/upload/avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  } catch (err) {
    console.error('Upload avatar error:', err);
    throw err;
  }
};

export const changePassword = async (
  id: string,
  oldPassword: string,
  newPassword: string
) => {
  try {
    const res = await api.post('/change-password', {
      id: id,
      oldPassword: oldPassword,
      newPassword: newPassword,
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};
