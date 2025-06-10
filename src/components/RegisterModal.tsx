'use client';

import React from 'react';
import { useState } from 'react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    city: '',
    age: '',
    gender: '',
    birthDate: '',
    school: '',
    department: '',
    futureJob: '',
    kvkkApproval: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#14141f]/90 backdrop-blur-sm flex items-center justify-center z-50" onClick={handleBackdropClick}>
      <div className="bg-[#14141f] rounded-2xl p-8 w-full max-w-xl mx-4">
        <h2 className="text-2xl font-medium text-white mb-10 text-center">Aramıza Katıl</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-white mb-2.5">İsim</label>
              <input
                type="text"
                className="w-full bg-[#e9ecef] rounded-lg px-4 py-3 text-black focus:outline-none"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-white mb-2.5">Soyisim</label>
              <input
                type="text"
                className="w-full bg-[#e9ecef] rounded-lg px-4 py-3 text-black focus:outline-none"
                value={formData.surname}
                onChange={(e) => setFormData({...formData, surname: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-white mb-2.5">Şehir</label>
              <input
                type="text"
                className="w-full bg-[#e9ecef] rounded-lg px-4 py-3 text-black focus:outline-none"
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-white mb-2.5">Yaş</label>
              <input
                type="number"
                className="w-full bg-[#e9ecef] rounded-lg px-4 py-3 text-black focus:outline-none"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-white mb-2.5">Cinsiyet</label>
              <input
                type="text"
                className="w-full bg-[#e9ecef] rounded-lg px-4 py-3 text-black focus:outline-none"
                value={formData.gender}
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-white mb-2.5">Doğum Tarihi</label>
              <input
                type="date"
                className="w-full bg-[#e9ecef] rounded-lg px-4 py-3 text-black focus:outline-none"
                value={formData.birthDate}
                onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-white mb-2.5">Okuduğunuz Okul</label>
              <input
                type="text"
                className="w-full bg-[#e9ecef] rounded-lg px-4 py-3 text-black focus:outline-none"
                value={formData.school}
                onChange={(e) => setFormData({...formData, school: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-white mb-2.5">Okuduğunuz Bölüm</label>
              <input
                type="text"
                className="w-full bg-[#e9ecef] rounded-lg px-4 py-3 text-black focus:outline-none"
                value={formData.department}
                onChange={(e) => setFormData({...formData, department: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 items-end">
            <div>
              <div className="space-y-0.5 mb-2.5">
                <label className="block text-white">Gelecekte Yapmak İstediğiniz</label>
                <label className="block text-white">Meslek/Mesleğiniz</label>
              </div>
              <input
                type="text"
                className="w-full bg-[#e9ecef] rounded-lg px-4 py-3 text-black focus:outline-none"
                value={formData.futureJob}
                onChange={(e) => setFormData({...formData, futureJob: e.target.value})}
              />
            </div>
            <div className="flex items-center space-x-2 pb-3 pl-2">
              <input
                type="checkbox"
                className="w-4 h-4 rounded bg-[#e9ecef] text-purple-600 focus:ring-0"
                checked={formData.kvkkApproval}
                onChange={(e) => setFormData({...formData, kvkkApproval: e.target.checked})}
              />
              <label className="text-white text-sm">
                KVKK Metnini Okudum onaylıyorum.
              </label>
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
            >
              BAŞVURUYU TAMAMLA
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}; 