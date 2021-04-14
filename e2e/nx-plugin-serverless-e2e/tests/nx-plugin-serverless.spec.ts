import {
  checkFilesExist,
  ensureNxProject,
  readJson,
  runNxCommandAsync,
  uniq,
} from '@nrwl/nx-plugin/testing';
describe('nx-plugin-serverless e2e', () => {
  it('should create nx-plugin-serverless', async (done) => {
    const plugin = uniq('nx-plugin-serverless');
    ensureNxProject(
      '@penumbra/nx-plugin-serverless',
      'dist/packages/nx-plugin-serverless'
    );
    await runNxCommandAsync(
      `generate @penumbra/nx-plugin-serverless:nx-plugin-serverless ${plugin}`
    );

    const result = await runNxCommandAsync(`build ${plugin}`);
    expect(result.stdout).toContain('Executor ran');

    done();
  });

  describe('--directory', () => {
    it('should create src in the specified directory', async (done) => {
      const plugin = uniq('nx-plugin-serverless');
      ensureNxProject(
        '@penumbra/nx-plugin-serverless',
        'dist/packages/nx-plugin-serverless'
      );
      await runNxCommandAsync(
        `generate @penumbra/nx-plugin-serverless:nx-plugin-serverless ${plugin} --directory subdir`
      );
      expect(() =>
        checkFilesExist(`libs/subdir/${plugin}/src/index.ts`)
      ).not.toThrow();
      done();
    });
  });

  describe('--tags', () => {
    it('should add tags to nx.json', async (done) => {
      const plugin = uniq('nx-plugin-serverless');
      ensureNxProject(
        '@penumbra/nx-plugin-serverless',
        'dist/packages/nx-plugin-serverless'
      );
      await runNxCommandAsync(
        `generate @penumbra/nx-plugin-serverless:nx-plugin-serverless ${plugin} --tags e2etag,e2ePackage`
      );
      const nxJson = readJson('nx.json');
      expect(nxJson.projects[plugin].tags).toEqual(['e2etag', 'e2ePackage']);
      done();
    });
  });
});
