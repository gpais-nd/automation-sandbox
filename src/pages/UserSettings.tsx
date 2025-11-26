import { useState } from 'react'
import { Save, User, Bell, Palette } from 'lucide-react'

interface UserProfile {
  name: string
  email: string
  theme: 'light' | 'dark' | 'auto'
  notifications: boolean
  language: string
  timezone: string
}

export function UserSettings() {
  const [profile, setProfile] = useState<UserProfile>({
    name: 'John Doe',
    email: 'john@example.com',
    theme: 'light',
    notifications: true,
    language: 'en',
    timezone: 'UTC-5'
  })
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSaving(false)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Reset to original values (simplified)
  }

  const updateProfile = (field: keyof UserProfile, value: any) => {
    setProfile(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="max-w-2xl mx-auto" data-testid="user-settings-page">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <User size={24} />
            User Settings
          </h1>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="btn-secondary"
              data-testid="edit-profile-btn"
            >
              Edit Profile
            </button>
          )}
        </div>

        <div className="space-y-6">
          {/* Profile Section */}
          <div className="border-b pb-6">
            <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
              <User size={20} />
              Profile Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => updateProfile('name', e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border rounded-md disabled:bg-gray-50"
                  data-testid="name-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => updateProfile('email', e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border rounded-md disabled:bg-gray-50"
                  data-testid="email-input"
                />
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="border-b pb-6">
            <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
              <Palette size={20} />
              Preferences
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Theme</label>
                <select
                  value={profile.theme}
                  onChange={(e) => updateProfile('theme', e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border rounded-md disabled:bg-gray-50"
                  data-testid="theme-select"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Language</label>
                <select
                  value={profile.language}
                  onChange={(e) => updateProfile('language', e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border rounded-md disabled:bg-gray-50"
                  data-testid="language-select"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notifications Section */}
          <div>
            <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
              <Bell size={20} />
              Notifications
            </h2>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="notifications"
                checked={profile.notifications}
                onChange={(e) => updateProfile('notifications', e.target.checked)}
                disabled={!isEditing}
                className="rounded"
                data-testid="notifications-checkbox"
              />
              <label htmlFor="notifications" className="text-sm">
                Enable email notifications
              </label>
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="flex gap-3 mt-6 pt-6 border-t">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="btn-primary flex items-center gap-2"
              data-testid="save-btn"
            >
              <Save size={16} />
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
            <button
              onClick={handleCancel}
              className="btn-secondary"
              data-testid="cancel-btn"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
