-- This is an empty migration.

INSERT INTO roles (id, name, description, is_active)
VALUES
  ('c535107a-e2c9-11f0-9839-00155df5cd31', 'Super Admin', 'Has full access to the entire system', 1),
  ('c5354105-e2c9-11f0-9839-00155df5cd32', 'Administrator', 'Manages company-level settings and all branches', 1),
  ('c535519d-e2c9-11f0-9839-00155df5cd33', 'Admin', 'Manages operations of a single branch', 1),
  ('c5355420-e2c9-11f0-9839-00155df5cd34', 'Doctor', 'Provides medical services within assigned branch', 1),
  ('c53555b4-e2c9-11f0-9839-00155df5cd35', 'User', 'Regular application user with limited access', 1);