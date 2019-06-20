
from setuptools import setup, find_packages
from bada.core.version import get_version

VERSION = get_version()

f = open('README.md', 'r')
LONG_DESCRIPTION = f.read()
f.close()

setup(
    name='bada',
    version=VERSION,
    description='CLI for JBHS',
    long_description=LONG_DESCRIPTION,
    long_description_content_type='text/markdown',
    author='Joe Badaczewski',
    author_email='joe307bad@gmail.com',
    url='https://github.com/joe307bad/bada',
    license='unlicensed',
    packages=find_packages(exclude=['ez_setup', 'tests*']),
    package_data={'bada': ['templates/*']},
    include_package_data=True,
    entry_points="""
        [console_scripts]
        bada = bada.main:main
    """,
)
