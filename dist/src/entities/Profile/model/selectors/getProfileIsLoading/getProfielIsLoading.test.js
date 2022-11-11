import { getProfileIsLoading } from './getProfielIsLoading';
describe('getProfileIsLoading.test', function () {
    test('should return error', function () {
        var state = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state)).toEqual(true);
    });
    test('should work with empty state', function () {
        var state = {};
        expect(getProfileIsLoading(state)).toEqual(undefined);
    });
});
