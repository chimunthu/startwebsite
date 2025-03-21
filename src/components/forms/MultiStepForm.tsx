import React, { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  businessStatus: string;
  joinObjective: string;
  interests: string[];
  supportArea: string;
  weeklyHours: string;
  startDate: string;
}

const MultiStepForm: React.FC = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    businessStatus: '',
    joinObjective: '',
    interests: [],
    supportArea: '',
    weeklyHours: '',
    startDate: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-heading font-bold">{t('form.steps.basic.title')}</h2>
            <div>
              <label className="block text-sm font-medium mb-1">{t('form.steps.basic.fullName')}</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{t('form.steps.basic.email')}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{t('form.steps.basic.phone')}</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-heading font-bold">{t('form.steps.profile.title')}</h2>
            <div>
              <label className="block text-sm font-medium mb-1">{t('form.steps.profile.businessStatus')}</label>
              <select
                name="businessStatus"
                value={formData.businessStatus}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">{t('form.steps.profile.selectOption')}</option>
                <option value="idea">{t('form.steps.profile.statusIdea')}</option>
                <option value="existing">{t('form.steps.profile.statusExisting')}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{t('form.steps.profile.joinObjective')}</label>
              <textarea
                name="joinObjective"
                value={formData.joinObjective}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows={4}
                required
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-heading font-bold">{t('form.steps.interests.title')}</h2>
            <div className="space-y-2">
              {['marketing', 'sales', 'networking', 'personal'].map(interest => (
                <label key={interest} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    onChange={() => handleCheckboxChange(interest)}
                    className="form-checkbox"
                  />
                  <span>{t(`form.steps.interests.${interest}`)}</span>
                </label>
              ))}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{t('form.steps.interests.supportArea')}</label>
              <textarea
                name="supportArea"
                value={formData.supportArea}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows={4}
                required
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-heading font-bold">{t('form.steps.availability.title')}</h2>
            <div>
              <label className="block text-sm font-medium mb-1">{t('form.steps.availability.weeklyHours')}</label>
              <select
                name="weeklyHours"
                value={formData.weeklyHours}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">{t('form.steps.availability.selectHours')}</option>
                <option value="0-5">0-5</option>
                <option value="6-10">6-10</option>
                <option value="10+">10+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{t('form.steps.availability.startDate')}</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-heading font-bold">{t('form.steps.review.title')}</h2>
            <div className="bg-gray-50 p-4 rounded space-y-2">
              <p><strong>{t('form.steps.basic.fullName')}:</strong> {formData.fullName}</p>
              <p><strong>{t('form.steps.basic.email')}:</strong> {formData.email}</p>
              <p><strong>{t('form.steps.basic.phone')}:</strong> {formData.phone}</p>
              <p><strong>{t('form.steps.profile.businessStatus')}:</strong> {formData.businessStatus}</p>
              <p><strong>{t('form.steps.profile.joinObjective')}:</strong> {formData.joinObjective}</p>
              <p><strong>{t('form.steps.interests.title')}:</strong> {formData.interests.join(', ')}</p>
              <p><strong>{t('form.steps.interests.supportArea')}:</strong> {formData.supportArea}</p>
              <p><strong>{t('form.steps.availability.weeklyHours')}:</strong> {formData.weeklyHours}</p>
              <p><strong>{t('form.steps.availability.startDate')}:</strong> {formData.startDate}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center space-x-2 mb-8">
          {[1, 2, 3, 4, 5].map(step => (
            <div
              key={step}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === step ? 'bg-primary text-white' : 'bg-gray-200'}`}
            >
              {step}
            </div>
          ))}
        </div>

        {renderStep()}

        <div className="flex justify-between mt-8">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
            >
              {t('form.buttons.previous')}
            </button>
          )}
          {currentStep < 5 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors ml-auto"
            >
              {t('form.buttons.next')}
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors ml-auto"
            >
              {t('form.buttons.submit')}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;